import { Outlet } from 'react-router-dom';
import { ToastBar, Toaster } from 'react-hot-toast';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';

export const Layout = () => {
  return (
    <div style={{ margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster>
        {t => (
          <ToastBar toast={t}>
            {({ message }) => (
              <>
                <BsFillExclamationTriangleFill />
                {message}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  );
};
