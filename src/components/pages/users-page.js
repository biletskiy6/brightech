import React from "react";
import ItemList from "../item-list";
import { withBrightechService } from "../hoc";

const UsersPage = ({ brightechService }) => {
  const { getUsers } = brightechService;
  return (
    <ItemList getData={getUsers}>
      {i => `${i.name} ${i.sirname} | ${i.email}`}
    </ItemList>
  );
};
export default withBrightechService(UsersPage);
