enum ON_OFF {
    //% block="on"
    HIGH,
    //% block="off"
    LOW
}

//% color="#CC00FF" iconWidth=50 iconHeight=40
namespace LED_Light {
    //% block="Turn [ON_OFF]digital  pin [PIN] LED" blockType="command"
    //% ON_OFF.shadow="dropdown" ON_OFF.options="ON_OFF" ON_OFF.defl="HIGH"
    //% PIN.shadow="dropdown" PIN.options="PIN_DigitalWrite" 
    
    export function setState(parameter: any, block: any) {
        let pin = parameter.PIN.code;
        let on_off = parameter.ON_OFF.code;
        Generator.addSetup( `pinMode_D`,`pinMode(${pin},OUTPUT);`);
        Generator.addCode(`digitalWrite(${pin},${on_off});`);
    }


    //% block="Set  analog  pin [PIN] LED  brightness [BRIGHTNESS]" blockType="command"
    //% PIN.shadow="dropdown" PIN.options="PIN_AnalogWrite" 
    //% BRIGHTNESS.shadow="range"  BRIGHTNESS.params.min=0 BRIGHTNESS.params.max=1023 BRIGHTNESS.defl=666
    export function setBrightness(parameter: any, block: any) {
        let pin = parameter.PIN.code;
        let brightness = parameter.BRIGHTNESS.code;
        Generator.addSetup( `pinMode_A`,`pinMode(${pin},OUTPUT);`);
        Generator.addCode(`analogWrite(${pin},${brightness});`);
    }

}
