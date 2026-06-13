const express=require('express')
const dotenv=require('dotenv');
const connectDB=require('./config/db');

dotenv.config()
const app=express();
connectDB();
app.use(express.json());



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const leagueRoutes = require("./routes/leagueRoutes");
app.use("/api/leagues", leagueRoutes);