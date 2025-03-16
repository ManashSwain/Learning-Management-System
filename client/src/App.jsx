import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/student/Home';
import CourseList from './pages/student/CourseList';
import CourseDetails from './pages/student/CourseDetails';
import MyEnrollments from './pages/student/MyEnrollments';
import Player from './pages/student/Player';
import Loading from './components/student/Loading';
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import AddCourse from './pages/educator/AddCourse';
import MyCourses from './pages/educator/MyCourses';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';
import Navbar from './components/student/Navbar';
import Companies from './components/student/Companies';
import Hero from './components/student/Hero';


function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course-list' element={<CourseList/>}/>
      <Route path='/course-list/:input' element={<CourseList/>}/>
      <Route path='/course/:id' element={<CourseDetails/>}/>
      <Route path='/my-enrollments' element={<MyEnrollments/>}/>
      <Route path='/player/:courseId' element={<Player/>}/>
      <Route path='/loading/:path' element={<Loading/>}/>
      <Route path='/educator' element={<Educator/>}>
        <Route path='educator' element={<Dashboard/>}/>
        <Route path='add-course' element={<AddCourse/>}/>
        <Route path='my-courses' element={<MyCourses/>}/>
        <Route path='students-enrolled' element={<StudentsEnrolled/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
