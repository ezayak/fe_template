import { FC, Fragment, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootState } from '../../store';

type Props = {
	children?: ReactNode
  };

const ProtectedRoute: FC<Props> = (props) => {
	const { authenticated } = useSelector((state: RootState) => {
        console.log('lena-dev', state.user);
        
        return state.user;
    });

    return (
        <Fragment>
            {
                authenticated ? 
                    props.children 
                :  
                    <Navigate to="/login" replace />
            }
        </Fragment>
    );
}

export default ProtectedRoute;