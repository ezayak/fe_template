import { HeaderMenu } from "../../components/header/header-menu.component";
import { Outlet } from 'react-router-dom';
import { PageHeader } from "../../components/header/page-header.component";
import './navigation.style.scss';

const Navigation = () => {
    return (
        <div className="page">
            <HeaderMenu />
            <PageHeader />

            <div className="main-container">
                <Outlet />
            </div>
        </div>
    );
}

export { Navigation };