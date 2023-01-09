import { Navigation } from 'components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <>
        <Routes>
          <Route path="/" element={<Navigation />}>
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="/movies" element={<Movies />} /> */}
            {/* <Route path="/movies/:movieId" element={<MovieDetails />}> */}
            {/* <Route path="cast" element={<Cast />} /> */}
            {/* <Route path="reviews" element={<Reviews />} /> */}
            {/* </Route> */}

            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </>
    </div>
  );
};
