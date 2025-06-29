import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './Store/store';
import { GlobalStyles } from './styles/GlobalStyles';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Report from './pages/Report';
import Mypage from './pages/Mypage';
import ReportDetail from './pages/ReportDetail';
import SupportList from './pages/SupportList';
import SupportDetail from './pages/SupportDetail';
import CommunityList from './pages/CommunityList';
import CommunityDetail from './pages/CommunityDetail';
import CommunityWrite from './pages/CommunityWrite';
function App() {
    return (_jsx(Provider, { store: store, children: _jsxs(Router, { children: [_jsx(GlobalStyles, {}), _jsx("div", { className: "App", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/signup", element: _jsx(SignUp, {}) }), _jsx(Route, { path: "/report", element: _jsx(Report, {}) }), _jsx(Route, { path: "/Mypage", element: _jsx(Mypage, {}) }), _jsx(Route, { path: "/ReportDetail", element: _jsx(ReportDetail, {}) }), _jsx(Route, { path: "/SupportList", element: _jsx(SupportList, {}) }), _jsx(Route, { path: "/SupportDetail", element: _jsx(SupportDetail, {}) }), _jsx(Route, { path: "/CommunityList", element: _jsx(CommunityList, {}) }), _jsx(Route, { path: "/CommunityDetail/:id", element: _jsx(CommunityDetail, {}) }), _jsx(Route, { path: "/CommunityWrite", element: _jsx(CommunityWrite, {}) })] }) })] }) }));
}
export default App;
