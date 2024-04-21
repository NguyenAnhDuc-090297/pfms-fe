import ExpenseChart from '../components/ExpenseChart';
import InvestmentChart from '../components/InvestmentChart';
import SummaryInfo from '../components/SummaryInfoNEW';

import '../css/page/home.css';

/**
+ * Function that renders the Home component with user data and additional components.
+ *
+ * @return {JSX.Element} The rendered Home component
*/
function Home() {
    const spendingData = [
      {
        name: "Jan",
        data: 4000,
      },
      {
        name: "Feb",
        data: 3000,
      },
      {
        name: "Mar",
        data: 5000,
      },
      {
        name: "Apr",
        data: 4000,
      },
      {
        name: "May",
        data: 3000,
      },
      {
        name: "Jun",
        data: 2000,
      },
      {
        name: "Jul",
        data: 4000,
      },
      {
        name: "Agu",
        data: 3000,
      },
      {
        name: "Sep",
        data: 4000,
      },
      {
        name: "Oct",
        data: 1000,
      },
      {
        name: "Nov",
        data: 4000,
      },
      {
        name: "Dec",
        data: 3000,
      },
    ];

    const investmentData = [
      {
        name: "Jan",
        data: 40000,
      },
      {
        name: "Feb",
        data: 30000,
      },
      {
        name: "Mar",
        data: 50000,
      },
      {
        name: "Apr",
        data: 40000,
      },
      {
        name: "May",
        data: 30000,
      },
      {
        name: "Jun",
        data: 20000,
      },
      {
        name: "Jul",
        data: 40000,
      },
      {
        name: "Agu",
        data: 30000,
      },
      {
        name: "Sep",
        data: 40000,
      },
      {
        name: "Oct",
        data: 10000,
      },
      {
        name: "Nov",
        data: 40000,
      },
      {
        name: "Dec",
        data: 30000,
      },
    ];

    return (
        <div className='home'>
            <div className='summary-home'>
              <SummaryInfo />
            </div>
            <div className='charts'>
              <ExpenseChart title="Monthly Spending" data={spendingData} />
              <InvestmentChart title="Monthly Investment" data={investmentData} />
            </div>
        </div>
    )
}

export default Home;