import GraphLayout from "../page";
import { NeynarAuthButton, SIWN_variant } from "@neynar/react";

const Signin = () => {
  return (
    <GraphLayout>
      
        <NeynarAuthButton variant={SIWN_variant.NEYNAR}  />
      
    </GraphLayout>
  );
};

export default Signin;
