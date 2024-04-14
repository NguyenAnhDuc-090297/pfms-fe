import Chart from '../components/Chart';
import FeaturedInfo from '../components/FeaturedInfo';
import '../css/page/home.css'

/**
+ * Function that renders the Home component with user data and additional components.
+ *
+ * @return {JSX.Element} The rendered Home component
*/
function Home() {
    const userData = [
      {
        name: "Jan",
        "VND": 4000,
      },
      {
        name: "Feb",
        "VND": 3000,
      },
      {
        name: "Mar",
        "VND": 5000,
      },
      {
        name: "Apr",
        "VND": 4000,
      },
      {
        name: "May",
        "VND": 3000,
      },
      {
        name: "Jun",
        "VND": 2000,
      },
      {
        name: "Jul",
        "VND": 4000,
      },
      {
        name: "Agu",
        "VND": 3000,
      },
      {
        name: "Sep",
        "VND": 4000,
      },
      {
        name: "Oct",
        "VND": 1000,
      },
      {
        name: "Nov",
        "VND": 4000,
      },
      {
        name: "Dec",
        "VND": 3000,
      },
    ];

    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="Monthly Spending" grid dataKey="VND" />
            <div className="homeWidgets">
                {/* <WidgetSm />
                <WidgetLg /> */}
            </div>
        </div>
    )
}

export default Home;