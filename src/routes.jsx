import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { AnimatedRoutes, PrivateRoute } from 'hoc'

// ? lazy load the pages when called
const Dashboard = lazy(() => import('hoc/DashboardLayout'))
const Login = lazy(() => import('pages/Login'))
const NotFound = lazy(() => import('pages/NotFound'))
const Home = lazy(() => import('pages/Home'))
const CourseFinder = lazy(() => import('pages/CourseFinder'))
const CoursePage = lazy(() => import('pages/CoursePage'))
const Contribute = lazy(() => import('pages/Contribute'))
const Contact = lazy(() => import('pages/Contact'))
const Favourites = lazy(() => import('pages/Favourites'))
const Logout = lazy(() => import('pages/Logout'))
const Settings = lazy(() => import('pages/Settings'))
const Timetable = lazy(() => import('pages/Timetable'))
const TimetableShare = lazy(() => import('pages/TimetableShare'))
const Privacy = lazy(() => import('pages/Privacy'))
const Terms = lazy(() => import('pages/Terms'))
const MinorDepartments = lazy(() => import('pages/MinorDepartments'))
const MinorDepartmentPage = lazy(() => import('pages/MinorDepartmentPage'))
const HonorsDepartments = lazy(() => import('pages/HonorsDepartments'))
const HonorsDepartmentPage = lazy(() => import('pages/HonorsDepartmentPage'))
const CourseInfo = lazy(() => import('pages/CourseInfo'))
const CPIPredictor = lazy(() => import('pages/CPIPredictor'))

// ? authentication necessary for all dashboard routes
export const DashboardRoutes = () => (
  <AnimatedRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/courses">
      <Route path="" element={<CourseFinder />} />
      <Route path=":code">
        <Route path="" element={<CoursePage />} />
        <Route path=":titleSlug" element={<CoursePage />} />
      </Route>
    </Route>
    <Route path="/minors">
      <Route path="" element={<MinorDepartments />} />
      <Route path=":departmentSlug">
        <Route path="" element={<Navigate to="/404" replace />} />
        <Route path=":id" element={<MinorDepartmentPage />} />
      </Route>
    </Route>
    <Route path="/honors">
      <Route path="" element={<HonorsDepartments />} />
      <Route path=":departmentSlug">
        <Route path="" element={<Navigate to="/404" replace />} />
        <Route path=":id" element={<HonorsDepartmentPage />} />
      </Route>
    </Route>
    <Route path="/course-info">
      <Route path="" element={<CourseInfo />} />
    </Route>
    <Route path = "/cpi-predictor" element = {< CPIPredictor/>}/>

    <Route path="/contribute" element={<Contribute />} />
    <Route path="/favourites" element={<Favourites />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/timetable">
      <Route path="" element={<Timetable />} />
      <Route path="share" element={<TimetableShare />} />
    </Route>
    <Route path="/logout" element={<Logout />} />
    <Route path="/404" element={<NotFound />} />
    <Route path="*" element={<Navigate to="/404" replace />} />
  </AnimatedRoutes>
)

// ! IMPORTANT: Remember to update any route changes on the sitemap
export const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/privacy-policy" element={<Privacy />} />
    <Route path="/terms-and-conditions" element={<Terms />} />
    <Route
      path="*"
      element={<PrivateRoute component={Dashboard} redirectTo="/login" />}
    />
  </Routes>
)
