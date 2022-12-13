import { Route, Routes } from "react-router-dom";
import Converter from "../../components/converter/converter.component";
import { CONVERTER_TYPES } from "../../utils/state/states";
const ConverterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Converter type={CONVERTER_TYPES.LENGTH} />} />
      <Route
        path="/temperature"
        element={<Converter type={CONVERTER_TYPES.TEMPERATURE} />}
      />
      <Route path="/area" element={<Converter type={CONVERTER_TYPES.AREA} />} />
      <Route
        path="/weight"
        element={<Converter type={CONVERTER_TYPES.WEIGHT} />}
      />
      <Route
        path="/volume"
        element={<Converter type={CONVERTER_TYPES.VOLUME} />}
      />
    </Routes>
  );
};

export default ConverterPage;
