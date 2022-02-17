import styled from "styled-components";
import AsideDash from "./AsideDash";
import HeaderDash from "./HeaderDash";

const Div =styled.div`
`

const DashboardLayout = () => {
  return (
    <>
   <HeaderDash/>
   <AsideDash/>
   </>
  );
};
export default DashboardLayout;
