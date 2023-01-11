import React from "react";
import ReactDOM from "react-dom/client";
import Header , { Title }from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
/**
+     Header
+        - Logo(Title)
+        - Nav Items(Right Side)
+        - Cart
+     Body 
+        - Search bar
+        - RestrauntList
+          - RestaurantCard (many cards)
+              - Image
+              - Name
+              - Rating
+              - Cusines
+     Footer
+      - links
+      - Copyright
+    
+    */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react  element inside the root
root.render(<AppLayout />);
