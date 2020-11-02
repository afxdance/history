import * as React from 'react';
import "MerchStyle.css";

export const MerchItemPageComponent: React.FC<{name: string, colorList }> = (props) => {



  return (
  <form>
    <select id="size" name="size">
    <option value="XS">XS</option>
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
    </select>
  </form>
)
}
