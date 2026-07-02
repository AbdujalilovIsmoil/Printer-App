package com.printer

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.Promise
import android.content.Context

import java.nio.charset.Charset


import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap



import net.posprinter.POSConst
import net.posprinter.POSPrinter

import android.app.Application
import net.posprinter.IDeviceConnection
import net.posprinter.POSConnect
import net.posprinter.posprinterface.IStatusCallback;
import net.posprinter.IConnectListener


//-----------------BLUETOOTH--------------
import android.bluetooth.BluetoothAdapter
import android.bluetooth.BluetoothDevice
import android.bluetooth.BluetoothManager

import android.os.Build


import android.graphics.Bitmap
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Paint
import android.graphics.Typeface

import android.graphics.BitmapFactory
import java.io.InputStream
import java.net.HttpURLConnection
import java.net.URL
//----------------------------------------





import android.content.BroadcastReceiver
import android.content.Intent
import android.content.IntentFilter
import android.app.PendingIntent

import android.hardware.usb.UsbDevice
import android.hardware.usb.UsbManager
import android.widget.Toast


class XPModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    var curConnect: IDeviceConnection? = null
    var bitmap: Bitmap? = null

    companion object {
        // 72mm paper @ 203 DPI (8 dots/mm)
        private const val PRINTER_BITMAP_WIDTH = 576
        // Matches PRINTER_WIDTH in JS — 48 chars × 12 dots = 576 px
        private const val PRINTER_CHARS_PER_LINE = 48
        private const val FONT_A_CHAR_HEIGHT_DOTS = 24
        private const val BITMAP_HEIGHT_SCALE = 1.2f
        private const val CALIBRATION_CHARS =
            "0123456789MWАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя "
    }

    private val applicationContext: Context = reactContext.applicationContext


    private val ACTION_USB_PERMISSION = "com.android.example.USB_PERMISSION"

    private val usbManager: UsbManager = applicationContext.getSystemService(Context.USB_SERVICE) as UsbManager
    
    
    

    
    var printer: POSPrinter? = null
    private val connectListener = IConnectListener { code, _, _ ->
        when (code) {
            POSConnect.SEND_FAIL -> {
            }
            POSConnect.USB_DETACHED -> {
            }
            POSConnect.USB_ATTACHED -> {
            }
        }}
    


    //---------------------BLUETOOTH------------------
   

    private val bluetoothAdapter: BluetoothAdapter by lazy {
        (applicationContext.getSystemService(Context.BLUETOOTH_SERVICE) as BluetoothManager).adapter
    }
    //---------------------BLUETOOTH------------------

    init {
        POSConnect.init(applicationContext)
    }


    override fun getName(): String {
        return "XPModule"
    }

    private val usbReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context?, intent: Intent?) {
            val action = intent?.action
            
            when (action) {
                UsbManager.ACTION_USB_DEVICE_ATTACHED -> {
                    val device: UsbDevice? =
                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                            intent.getParcelableExtra(UsbManager.EXTRA_DEVICE, UsbDevice::class.java)
                        } else {
                            @Suppress("DEPRECATION")
                            intent.getParcelableExtra(UsbManager.EXTRA_DEVICE)
                        }
                    requestUserPermission(device)
                }
                UsbManager.ACTION_USB_DEVICE_DETACHED -> {
                    val device: UsbDevice? =
                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                            intent.getParcelableExtra(UsbManager.EXTRA_DEVICE, UsbDevice::class.java)
                        } else {
                            @Suppress("DEPRECATION")
                            intent.getParcelableExtra(UsbManager.EXTRA_DEVICE)
                        }
                    Toast.makeText(context, "DETACHED: " + device!!.deviceName, Toast.LENGTH_SHORT).show()
                }
                ACTION_USB_PERMISSION -> {
                    synchronized(this) {
                        val device: UsbDevice? =
                            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                                intent.getParcelableExtra(UsbManager.EXTRA_DEVICE, UsbDevice::class.java)
                            } else {
                                @Suppress("DEPRECATION")
                                intent.getParcelableExtra(UsbManager.EXTRA_DEVICE)
                            }
                        if (intent.getBooleanExtra(UsbManager.EXTRA_PERMISSION_GRANTED, false)==true) {
                            connectUSB()
                        } else {
                            Toast.makeText(context, "Permission denied for device: $device", Toast.LENGTH_SHORT).show()
                        }
                    }
                }
            }
        }
    }

    private fun requestUserPermission(device: UsbDevice?) {
        if (device == null) {
            Toast.makeText(applicationContext, "DEVICE IS NULL", Toast.LENGTH_SHORT).show()
            return
        }

        val explicitIntent = Intent(ACTION_USB_PERMISSION).apply {
            setPackage(applicationContext.packageName) 
        }
    
        val mPendingIntent = PendingIntent.getBroadcast(
            applicationContext,
            0,
            explicitIntent,
            if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.S ) PendingIntent.FLAG_MUTABLE else 0
        )
        usbManager.requestPermission(device, mPendingIntent)
    }

    private fun setFilters() {
        val filter = IntentFilter().apply {
            addAction(ACTION_USB_PERMISSION)
            addAction(UsbManager.EXTRA_PERMISSION_GRANTED)
            addAction(UsbManager.EXTRA_DEVICE)
            addAction(UsbManager.ACTION_USB_DEVICE_ATTACHED)
            addAction(UsbManager.ACTION_USB_DEVICE_DETACHED)
        }
    
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            applicationContext.registerReceiver(usbReceiver, filter, Context.RECEIVER_NOT_EXPORTED)
        } else {
            applicationContext.registerReceiver(usbReceiver, filter)
        }
    }
    
    

    @ReactMethod
    fun registerUsbFilters() {
        setFilters()
    }

    @ReactMethod
    fun connectUSB() {


        val usbNames = POSConnect.getUsbDevices(applicationContext)
        var usbAddress = ""
        if (usbNames.isNotEmpty()) {
            usbAddress = usbNames[0]
        }
        if (usbAddress == "") {
            
        } else {
            curConnect?.close()
            curConnect = POSConnect.createDevice(POSConnect.DEVICE_TYPE_USB)
                
            try{
                curConnect!!.connect(usbAddress, IConnectListener { code,_, _ -> 
                        when (code) {
                            POSConnect.CONNECT_SUCCESS -> {
                                printer = POSPrinter(curConnect)
                                Toast.makeText(applicationContext, "CONNECTED SUCCESSFULLY", Toast.LENGTH_SHORT).show()
                            }
                            else -> {
                            }
                        
                    }
                })
            }
            catch(e: Exception){
            }
        }
    }

    @ReactMethod
    fun connectNet(ipAddress: String) {
        if (ipAddress == "") {
            
        } else {
            curConnect?.close()
            curConnect = POSConnect.createDevice(POSConnect.DEVICE_TYPE_ETHERNET)
            curConnect!!.connect(ipAddress, IConnectListener {code, _, _ ->
                    when (code) {
                        POSConnect.CONNECT_SUCCESS -> {
                            printer = POSPrinter(curConnect)
                        }
                        else -> {
                            Toast.makeText(applicationContext, "FAIL_CONNECT", Toast.LENGTH_SHORT).show()
                        }
                    }
                }
            )
        }
    }

    @ReactMethod
    fun connectBt(str: String) {
        curConnect?.close()
        curConnect = POSConnect.createDevice(POSConnect.DEVICE_TYPE_BLUETOOTH)
        curConnect!!.connect(str, IConnectListener { code, _, _, ->
                when (code) {
                    POSConnect.CONNECT_SUCCESS -> {
                        printer = POSPrinter(curConnect)
                        Toast.makeText(applicationContext, "CONNECTED SUCCESSFULLY", Toast.LENGTH_SHORT).show()
                    }
                    else -> {
                        Toast.makeText(applicationContext, "FAIL_CONNECT", Toast.LENGTH_SHORT).show()
                    }
                }
            
        })
        printer = POSPrinter(curConnect)
    }

    @ReactMethod
    private fun searchBTDevices(promise: Promise) {
    try {
        val deviceList: MutableList<WritableMap> = mutableListOf()

        val bondedDevices: Set<BluetoothDevice> = bluetoothAdapter.bondedDevices

        bondedDevices.forEach {
            val name = it.name ?: "Unknown device"
            val address = it.address ?: "Unknown address"

            val deviceMap = Arguments.createMap()
            deviceMap.putString("name", name)
            deviceMap.putString("address", address)

            deviceList.add(deviceMap)
        }

        val writableArray = Arguments.createArray()
        deviceList.forEach { writableArray.pushMap(it) }
        promise.resolve(writableArray)

    } catch (e: Exception) {
        promise.reject("SEARCH_DEVICES_ERROR", e)
    }
    }

    @ReactMethod
    private fun selectCodePage(code: Int){
        if(printer!=null){
            printer!!.selectCodePage(code)
        }
    } 

    @ReactMethod
    fun makeCustomSound(promise: Promise) {
        try {
            // Command bytes for 0.5 second sound
            val soundCommand: ByteArray = byteArrayOf(0x1B, 0x42, 0x03, 0x03)

            // Send the sound command to the printer
            printer?.sendData(soundCommand)

            // Resolve the promise indicating success
            promise.resolve("Custom sound sent successfully")
        } catch (e: Exception) {
            // Reject the promise if an error occurs
            promise.reject("SOUND_ERROR", e.message)
        }
    }

    @ReactMethod
    fun printText(str: String) {
        if(printer!=null){
            printer!!.printString(str)
        }
    }



    @ReactMethod
    fun printTextWithStyle(CodePage: String, str: String,align: Int, attribute:Int,size:Int ) {
        if(printer!=null){
            printer!!.setAlignment(align)
            printer!!.setTextStyle(attribute, size or (size shl 4))
            val charset = Charset.forName(CodePage)
            val cp866EncodedText = str.toByteArray(charset)
            printer!!.sendData(cp866EncodedText)

            // val textBitmap = createTextBitmap(str, align, attribute, size)
            // printer!!.printBitmap(textBitmap, align, PRINTER_BITMAP_WIDTH)
            // textBitmap.recycle()
        }
    }

    private fun charsPerLine(widthScale: Float): Int =
        maxOf(1, (PRINTER_CHARS_PER_LINE / widthScale).toInt())

    private fun cellWidth(widthScale: Float): Float =
        PRINTER_BITMAP_WIDTH.toFloat() / charsPerLine(widthScale)

    private fun maxCharWidth(paint: Paint): Float {
        var maxWidth = 0f
        for (char in CALIBRATION_CHARS) {
            maxWidth = maxOf(maxWidth, paint.measureText(char.toString()))
        }
        return maxWidth
    }

    private fun createTextPaint(attribute: Int, widthScale: Float, heightScale: Float): Paint {
        val cell = cellWidth(widthScale)
        return Paint().apply {
            color = Color.BLACK
            isAntiAlias = false
            isSubpixelText = false
            typeface = if ((attribute and 8) != 0) {
                Typeface.create(Typeface.MONOSPACE, Typeface.BOLD)
            } else {
                Typeface.MONOSPACE
            }
            textSize = FONT_A_CHAR_HEIGHT_DOTS * heightScale
            textScaleX = cell / maxCharWidth(this)
        }
    }

    private fun drawTextLine(
        canvas: Canvas,
        paint: Paint,
        line: String,
        align: Int,
        printerWidth: Int,
        y: Float,
        cell: Float,
    ) {
        val lineWidth = cell * line.length
        var x = when (align) {
            POSConst.ALIGNMENT_CENTER -> (printerWidth - lineWidth) / 2f
            POSConst.ALIGNMENT_RIGHT -> printerWidth - lineWidth
            else -> 0f
        }
        val baselineY = y - paint.fontMetrics.descent
        for (char in line) {
            canvas.drawText(char.toString(), x, baselineY, paint)
            x += cell
        }
    }

    private fun createTextBitmap(text: String, align: Int, attribute: Int, size: Int): Bitmap {
        val effectiveSize = size or (size shl 4)
        val widthScale = when (effectiveSize and 0x0F) {
            1 -> 2f
            2 -> 3f
            else -> 1f
        }
        val heightScale = when ((effectiveSize shr 4) and 0x0F) {
            1 -> 2f
            2 -> 3f
            else -> widthScale
        }

        val paint = createTextPaint(attribute, widthScale, heightScale)
        val lineHeight = FONT_A_CHAR_HEIGHT_DOTS * heightScale * BITMAP_HEIGHT_SCALE
        val cell = cellWidth(widthScale)

        val printerWidth = PRINTER_BITMAP_WIDTH
        val lines = text
            .removePrefix("\n")
            .removeSuffix("\n")
            .split('\n', ignoreCase = false, limit = 0)

        if (lines.isEmpty()) {
            val bitmap = Bitmap.createBitmap(printerWidth, lineHeight.toInt().coerceAtLeast(1), Bitmap.Config.ARGB_8888)
            Canvas(bitmap).drawColor(Color.WHITE)
            return bitmap
        }

        val bitmapHeight = maxOf(1, (lineHeight * lines.size).toInt())

        val bitmap = Bitmap.createBitmap(printerWidth, bitmapHeight, Bitmap.Config.ARGB_8888)
        val canvas = Canvas(bitmap)
        canvas.drawColor(Color.WHITE)

        var y = lineHeight
        for (line in lines) {
            if (line.isNotEmpty()) {
                drawTextLine(canvas, paint, line, align, printerWidth, y, cell)
            }
            y += lineHeight
        }

        return bitmap
    }

    @ReactMethod
    fun cutPaper() {
        if(printer!=null){
            printer!!.cutHalfAndFeed(1)
        }
    }

    @ReactMethod
    fun openCashBox() {
        if(printer!=null){
            printer!!.openCashBox(1)
        }
    }
    

    @ReactMethod
    fun setIp(ipAddress: String) {
        if(printer!=null){
            val ipBytes = ipAddress.toByteArray() // 
            printer!!.setIp(ipBytes)
        }
    }


    @ReactMethod
    fun printBarcode() {
        if(printer!=null){
            printer!!.initializePrinter()
            .printString("UPC-A\n")
            .printBarCode("123456789012", POSConst.BCS_UPCA)
            .printString("UPC-E\n")
            .printBarCode("042100005264", POSConst.BCS_UPCE, 2, 70, POSConst.ALIGNMENT_LEFT)//425261
            .printString("JAN8\n")
            .printBarCode("12345678", POSConst.BCS_JAN8, 2, 70, POSConst.ALIGNMENT_CENTER)
            .printString("JAN13\n")
            .printBarCode("123456791234", POSConst.BCS_JAN13, 2, 70, POSConst.ALIGNMENT_RIGHT)
            .printString("CODE39\n")
            .printBarCode("ABCDEFGHI", POSConst.BCS_Code39, 2, 70, POSConst.ALIGNMENT_CENTER, POSConst.HRI_TEXT_BOTH)
            .printString("ITF\n")
            .printBarCode("123456789012", POSConst.BCS_ITF, 70)
            .printString("CODABAR\n")
            .printBarCode("A37859B", POSConst.BCS_Codabar, 70)
            .printString("CODE93\n")
            .printBarCode("123456789", POSConst.BCS_Code93, 70)
            .printString("CODE128\n")
            .printBarCode("{BNo.123456", POSConst.BCS_Code128, 2,70, POSConst.ALIGNMENT_LEFT)
            .feedLine()
            .cutHalfAndFeed(1)
        }
    }


    @ReactMethod
    fun printQRCode(content:String) {
        
       if(printer!=null){
        printer!!.initializePrinter()
        .printQRCode(content)
       }
    }



    @ReactMethod
    public fun loadImageFromUrl(url: String, promise: Promise) {
        var inputStream: InputStream? = null
        try {
            val imageUrl = URL(url)
            val connection: HttpURLConnection = imageUrl.openConnection() as HttpURLConnection
            connection.doInput = true
            connection.connect()
            inputStream = connection.inputStream
            bitmap = BitmapFactory.decodeStream(inputStream)
            if (bitmap != null) {
                promise.resolve("Image loaded successfully")
            } else {
                promise.reject("ERROR", "Bitmap decoding returned null")
            }
            // promise.resolve("successfully downloaded...")
        } catch (e: Exception) {
            promise.reject("ERROR", e.message)
            e.printStackTrace()
        } finally {
            try {
                inputStream?.close()
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }



    @ReactMethod
    private fun printBitmap() {
    if (printer != null) {
        val printableBitmap = bitmap // Smart cast is not possible here
        if (printableBitmap != null && !printableBitmap.isRecycled) {
            printer!!.printBitmap(printableBitmap, POSConst.ALIGNMENT_CENTER, PRINTER_BITMAP_WIDTH)
        } else {
            // Handle the case where the bitmap is null or recycled
            // You may want to reject the printing operation or handle it differently
        }
    }
    }

    @ReactMethod
    fun closeConnection() {
        curConnect?.close()
    }

}
