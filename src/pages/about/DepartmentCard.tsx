import { DepartmentDataObject } from './departmentType';
import ImageWithLoader from '../../components/ImageWithLoader';

export default function DepartmentCard({ departmentData }: { departmentData: DepartmentDataObject }) {
    return (
        <div className="department-card">
            <ImageWithLoader 
                src={departmentData.image} 
                alt={departmentData.name} 
                className="department-image" 
                containerStyle={{ width: '400px', aspectRatio: '4/3', height: 'auto' }}
            />
            <div className="department-content">
                <h3 className="department-name">{departmentData.name}</h3>
                <p className="department-description">{departmentData.description}</p>
            </div>
        </div>
    );
}