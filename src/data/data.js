import WorkIm from '../Assets/projects/workImg.jpeg'
import RealEst from '../Assets/projects/realestate.jpg'
import BF from "../Assets/projects/BF.jpg"
import NBA from "../Assets/projects/NBA.jpg"
import GaitEar from "../Assets/projects/GaitEar.jpg"
import Face from "../Assets/projects/Face.jpeg"
import Wordle from "../Assets/projects/Wordle.jpg"
import Covid from "../Assets/projects/Covid.jpg"

export const data=[
    {
        id:1,
        name:"Critical Parameter Prediction of BF",
        description:"Analyzing various chemical parameters effecting the average skin temperature of the Blast Furnace & taking decisions based on these predictions made.",
        image:BF,
        tags: ["Deep Learning","Machine Learning","Regression","EDA"],
        github:"https://github.com/dinesh0402/Critical-Parameter-Prediction-of-Blast-Furnace",
        live:"",
    },
    {
        id:2,
        name:"NBA Fantasy Lineup Optimization",
        description:"Using Genetic Algorithm to optimize the lineup based on fantasy team perforrmances and predicting the obtainable maximum fantasy points.",
        image:NBA,
        tags: ["Gentic Algorithm","AI","Plotly","NumPy","Pandas"],
        github:"https://github.com/dinesh0402/NBA-Fantasy-Lineup-Optimization-using-Genetic-Algorithm",
        live:"",
    },
    {
        id:3,
        name:"Multimodal Biometric System",
        description:"Designed a multimodal biometric system which uses the Gait (Gait Energy Image) & Ear (Ear Contours) features of an individual for identification.",
        image:GaitEar,
        tags: ["Biometrics","SIFT","Resnet_101","Haarcascade","OpenCV"],
        github:"https://github.com/dinesh0402/Multimodal-Biometric-System",
        live:"",
    },
    {
        id:4,
        name:"Face & Traffic Sign Recognition",
        description:"Build a Face Recgnition model based on the Eigenfaces Algorithm (relies on PCA) for extracting the Eigenfaces of the image dataset. Same is extended for Traffic Sign Recognition.",
        image:Face,
        tags: ["OpenCV","Pillow","Scikit Learn","Matplotlib"],
        github:"https://github.com/dinesh0402/ML-Course-Project",
        live:"",
    },
    {
        id:5,
        name:"Wordle using React.JS",
        description:"A simple game of Wordle by New York Times emulated using React.JS and utilizing its state management properties to track guesses and letter color based on position.",
        image:Wordle,
        tags: ["React.JS","JSON Server","Wordle","Guess Game"],
        github:"https://github.com/dinesh0402/Wordle_using_React",
        live:"",
    },
    {
        id:6,
        name:"COVID-19 Tracker App",
        description:"A web application giving some basic info about the COVID-19 cases, recovered and deaths information all across the world countries using the 'disease.sh' API.",
        image:Covid,
        tags: ["React.JS","Firebase","Leaflet","Chart.JS","disesase.sh API"],
        github:"https://github.com/dinesh0402/COVID-19_Tracker",
        live:"https://covid-19-tracker-37bec.web.app/",
    },


]