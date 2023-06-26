import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor,faPrescriptionBottleMedical,faTruckMedical,faKitMedical,faStethoscope,faSyringe } from '@fortawesome/free-solid-svg-icons';
const Serve = [
    {
        icon: <FontAwesomeIcon icon={faStethoscope} />,
        id: 1,
        title: "Diagnostics",
        details: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    },
    {
        icon: <FontAwesomeIcon icon={faPrescriptionBottleMedical} />,
        id: 2,
        title: 'Treatment',
        details: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    },
    {
        icon: <FontAwesomeIcon icon={faKitMedical} />,
        id: 3,
        title: 'Surgery',
        details: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    },
    {
        icon: <FontAwesomeIcon icon={faTruckMedical} />,
        id: 4,
        title: 'Emergency',
        details: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    },
    {
        icon: <FontAwesomeIcon icon={faSyringe} />,
        id: 5,
        title: 'Vaccine',
        details: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    },
    {
        icon: <FontAwesomeIcon icon={faUserDoctor} />,
        id: 6,
        title: 'Qualified Doctors',
        details: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    }
]

export default Serve;