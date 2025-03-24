export const ActivityWaiting = () => {
  return (
    <div className="pageloader" style={{ height: '250px', background: '#fff' }}>
      <div className="loader"></div>
      <div className="loader-section left"></div>
      <div className="loader-section right"></div>
    </div>
  );
};