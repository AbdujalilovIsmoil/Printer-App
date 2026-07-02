import { useEffect } from 'react';
import { Button, View, NativeModules } from 'react-native';
import {
  ALIGNMENT_LEFT,
  FNT_DEFAULT,
  PRINTER_CODE_PAGE_RU,
  TXT_1WIDTH,
} from '../../shared/constants';

const Xprinter = NativeModules.XPModule;

const PrinterScreen = () => {
  useEffect(() => {
    Xprinter.registerUsbFilters();
    Xprinter.connectUSB();
  }, []);

  return (
    <View>
      <Button
        title="Button1"
        onPress={() => {
          Xprinter.printText('Hello World!\n');
        }}
      />
      <Button
        title="Button2"
        onPress={() => {
          Xprinter.printTextWithStyle(
            PRINTER_CODE_PAGE_RU,
            'Salom\nMening\nIsmim\nJack',
            ALIGNMENT_LEFT,
            FNT_DEFAULT,
            TXT_1WIDTH,
          );
        }}
      />
    </View>
  );
};

export default PrinterScreen;
