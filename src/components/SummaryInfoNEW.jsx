import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SavingsIcon from "@mui/icons-material/Savings";
import FiberNewIcon from '@mui/icons-material/FiberNew';
import { pink } from "@mui/material/colors";
import { orange } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import { purple } from "@mui/material/colors";

import "../css/component/summary.css";

function SummaryInfo() {
  return (
    <div>
      <div className="summaryTitlte">
        <span className="title">Statistics this month</span>
        <span className="subtitle">Summary of data</span>
      </div>

      <div className="summary">
        <div className="summaryItem income">
          <AccountBalanceWalletIcon style={{ color: pink[500] }} />
          <span className="summaryTitle">Income</span>
          <div className="summaryMoneyContainer">
            <span className="summaryMoney">$2,415</span>
            <span className="summaryMoneyRate">
              -11.4 <ArrowDownward className="summaryIcon negative" />
            </span>
          </div>
          <span className="summarySub">Compared to last month</span>
        </div>

        <div className="summaryItem expense">
          <ShoppingCartIcon style={{ color: orange[500] }} />
          <span className="summaryTitle">Expenses</span>
          <div className="summaryMoneyContainer">
            <span className="summaryMoney">$4,415</span>
            <span className="summaryMoneyRate">
              -1.5 <ArrowDownward className="summaryIcon negative" />
            </span>
          </div>
          <span className="summarySub">Compared to last month</span>
        </div>

        <div className="summaryItem capital-outlay">
          <SavingsIcon style={{ color: green[500] }} />
          <span className="summaryTitle">Capital Outlay</span>
          <div className="summaryMoneyContainer">
            <span className="summaryMoney">$2,225</span>
            <span className="summaryMoneyRate">
              +2.6 <ArrowUpward className="summaryIcon" />
            </span>
          </div>
          <span className="summarySub">Compared to last month</span>
        </div>

        <div className="summaryItem new-expenses">
          <FiberNewIcon style={{ color: purple[500] }} />
          <span className="summaryTitle">New Expenses</span>
          <div className="summaryMoneyContainer">
            <span className="summaryMoney">25</span>
            <span className="summaryMoneyRate">
              +3 <ArrowUpward className="summaryIcon" />
            </span>
          </div>
          <span className="summarySub">Compared to last month</span>
        </div>
      </div>
    </div>
  );
}

export default SummaryInfo;
