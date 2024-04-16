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

    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart title="Monthly Spending" data={userData} />
            <div className="homeWidgets">
                {/* <WidgetSm />
                <WidgetLg /> */}
            </div>
        </div>
    )
}

export default Home;