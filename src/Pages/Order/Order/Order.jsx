import CommonBanner from "../../Shared/CommonBanner";
import order from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";

const Order = () => {
    const [tabIndex , setTabIndex] = useState(0) ;
    const [menu] = useMenu() ;
    const dessert = menu.filter(item => item.category === "dessert");
    const salad = menu.filter(item => item.category === "salad");
    const drinks = menu.filter(item => item.category === "drinks");
    const pizza = menu.filter(item => item.category === "pizza");
    const soup = menu.filter(item => item.category === "soup");

    return (
        <div>
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
                        <Tab>Drink</Tab>
                    </TabList>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;