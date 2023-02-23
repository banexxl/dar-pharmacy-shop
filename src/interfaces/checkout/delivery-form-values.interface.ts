import { AddressFormValues } from './address-form-values.interface';

import { ShippingMethod } from '../../components/checkout/delivery/components/shipping-method.enum';

export interface DeliveryFormValues {
          shippingAddress: AddressFormValues;
          shippingMethod?: ShippingMethod;
}
