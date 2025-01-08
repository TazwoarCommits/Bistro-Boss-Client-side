import CommonBanner from "../../Shared/CommonBanner";
import order from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const { category } = useParams();
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
    const initailIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initailIndex);
    const [menues] = useMenu();

    const dessert = menues.filter(item => item.category === "dessert");
    const salad = menues.filter(item => item.category === "salad");
    const drinks = menues.filter(item => item.category === "drinks");
    const pizza = menues.filter(item => item.category === "pizza");
    const soup = menues.filter(item => item.category === "soup");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <CommonBanner
                img={order}
                title={"Order Now"}
                subtitle={"Would You Like To Try A dish"}
            ></CommonBanner>
            <div className="mt-12 md:mt-24">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;