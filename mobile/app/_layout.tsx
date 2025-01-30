import React from "react";
import { Slot } from "expo-router";
import { Auth0Provider } from "react-native-auth0";
import Index from "./index";

export default function RootLayout() {
  return (
    <Auth0Provider
      domain={"dev-0h6otffdtwaewde7.us.auth0.com"}
      clientId={"h1z4GXD9zEisbek7QD1Fy4RVIqo5Xe0D"}
    >
      <Index />
    </Auth0Provider>
  );
}
