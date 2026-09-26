import type { Department } from '../../content/types';
import { resolveMedia } from '../../content/media';
import ImageWithLoader from '../../components/ImageWithLoader';

export default function DepartmentCard({ departmentData }: { departmentData: Department }) {
    return (
        <div className="department-card">
            <ImageWithLoader 
                src={resolveMedia(departmentData.image)} 
                alt={departmentData.name} 
                className="department-image" 
                containerClassName="department-image-container"
            />
            <div className="department-content">
                <h3 className="department-name">{departmentData.name}</h3>
                <p className="department-description">{departmentData.description}</p>
            </div>
        </div>
    );
}
