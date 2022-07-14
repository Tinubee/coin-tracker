import styled from "styled-components";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Line from "./ChartLine";
import Candle from "./ChartCandle";

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const chartlineMatch = useRouteMatch("/:coinId/chart/line");
  const chartcandleMatch = useRouteMatch("/:coinId/chart/candle");

  return (
    <div>
      <Tabs>
        <Tab isActive={chartlineMatch !== null}>
          <Link to={`/${coinId}/chart/line`}>Line</Link>
        </Tab>
        <Tab isActive={chartcandleMatch !== null}>
          <Link to={`/${coinId}/chart/candle`}>Candle</Link>
        </Tab>
      </Tabs>

      <Switch>
        <Route path={`/:coinId/chart/line`}>
          <Line coinId={coinId} />
        </Route>
        <Route path={`/:coinId/chart/candle`}>
          <Candle coinId={coinId} />
        </Route>
      </Switch>
    </div>
  );
}

export default Chart;
