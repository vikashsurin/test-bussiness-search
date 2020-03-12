import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer cru1gsY4mdJL49CG3GtrkMYugRvydiqTDX5tm8TDdazKd4J4wXyB1fuWwQrOye0lxKMZ_YfnB9KmDbfDb-UbJ66xABBTMiI7wD43E_Uc1Cdo9SeH73nbFXRnbYZXXnYx"
  }
});
