////
// mekanism registry
//// renik
// Author: FooterMan15?

const $EventBuses = Java.loadClass('dev.architectury.platform.forge.EventBuses')
const $GasDeferredRegister = Java.loadClass('mekanism.common.registration.impl.GasDeferredRegister')
const $SlurryDeferredRegister = Java.loadClass('mekanism.common.registration.impl.SlurryDeferredRegister')
const $InfuseTypeDeferredRegister = Java.loadClass('mekanism.common.registration.impl.InfuseTypeDeferredRegister')

const GASES = new $GasDeferredRegister('kubejs')
const SLURRY = new $SlurryDeferredRegister('kubejs')
const INFUSETYPE = new $InfuseTypeDeferredRegister('kubejs')
const $GasAttributes = Java.loadClass('mekanism.api.chemical.gas.attribute.GasAttributes')
const $Radiation = $GasAttributes.Radiation

GASES.register($EventBuses.getModEventBus('kubejs').get())