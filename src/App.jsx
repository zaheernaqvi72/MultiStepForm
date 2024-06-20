import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MultiStepForm from './components/MultiStepForm';
import SubmittedForm from './components/SubmittedForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MultiStepForm />} />
        <Route path="/submitted" element={<SubmittedForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
