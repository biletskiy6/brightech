import React from "react";
import { withBrightechService } from "../hoc";
import ItemList from "../item-list";
const DriversPage = ({ brightechService }) => {
  const { getDrivers } = brightechService;
  return (
    <ItemList getData={getDrivers}>
      {i => `${i.name} ${i.sirname} | ${i.phone}`}
    </ItemList>
  );
};
export default withBrightechService(DriversPage);
