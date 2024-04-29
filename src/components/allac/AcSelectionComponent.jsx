import React from 'react';

const AcSelectionComponent = () => {
  return (
    <div className="bg-blue-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Why Choose Us?</h1>
      <div className="flex flex-wrap justify-center items-center gap-10">
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-blue-800 p-4 rounded-lg">
            <img src="../images/airdoot-logo.png" alt="Window AC" />
            <p className="mt-2">WINDOW AC</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg">
            <img src="../images/airdoot-logo.png" alt="Split AC" />
            <p className="mt-2">SPLIT AC</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg">
            <img src="../images/airdoot-logo.png" alt="Cassette AC" />
            <p className="mt-2">CASSETTE AC</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg">
            <img src="../images/airdoot-logo.png" alt="Tower AC" />
            <p className="mt-2">TOWER AC</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg">
            <img src="../images/airdoot-logo.png" alt="Ductable AC (FCU)" />
            <p className="mt-2">DUCTABLE AC (FCU)</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg">
            <img src="../images/airdoot-logo.png" alt="Ductable AC (Mid-Static)" />
            <p className="mt-2">DUCTABLE AC (MID-STATIC)</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg">
            <img src="../images/airdoot-logo.png" alt="Ductable AC (Hi-Static)" />
            <p className="mt-2">DUCTABLE AC (HI-STATIC)</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg">
            <img src="../images/airdoot-logo.png" alt="VRF Side Discharge" />
            <p className="mt-2">VRF SIDE DISCHARGE</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg">
            <img src="../images/airdoot-logo.png" alt="Packaged Unit (Hi-Static)" />
            <p className="mt-2">PACKAGED UNIT (HI-STATIC)</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg">
            <img src="../images/airdoot-logo.png" alt="VRF Top Discharge" />
            <p className="mt-2">VRF TOP DISCHARGE</p>
          </div>
        </div>
        <div className="w-64">
          <img src="../images/airdoot-logo.png" alt="Technician" className="rounded-full p-2 bg-blue-800" />
          <p className="text-center mt-2">Our Expert Technician</p>
        </div>
      </div>
    </div>
  );
};

export default AcSelectionComponent;