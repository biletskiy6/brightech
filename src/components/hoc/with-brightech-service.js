import React from "react";
import { BrightechServiceConsumer } from "../brightech-service-context";

const withBrightechService = Wrapped => props => {
  return (
    <BrightechServiceConsumer>
      {value => {
        return <Wrapped {...props} brightechService={value} />;
      }}
    </BrightechServiceConsumer>
  );
};

export { withBrightechService };
