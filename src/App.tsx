import { BrowserRouter, Route, Routes } from "react-router"
import { About, Contact, Home, Layout, NotFound, Skills, Work } from "./pages"
import { AddSkills, AdminLayout, Dashboard } from "./pages/admin"
import { ThemeProvider } from "./components/theme-provider"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="work" element={<Work />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> {/* 404 page */}
          </Route>
          <Route path="/dashboard" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="addskills" element={<AddSkills />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App