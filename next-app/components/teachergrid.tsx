import React from 'react';
import Image from 'next/image';

export interface Teacher {
  id: string;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

interface TeacherGridProps {
  teachers: Teacher[];
}

const TeacherGrid: React.FC<TeacherGridProps> = ({ teachers }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {teachers.map((teacher) => (
        <div key={teacher.id} className="text-center w-full">
          {/* Profile Image */}
          <div className="mb-4 flex justify-center">
            <div className="relative w-40 h-40 bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src={teacher.imageUrl}
                alt={teacher.imageAlt}
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          {/* Name */}
          <h3 className="text-white text-lg font-semibold mb-2">
            {teacher.name}
          </h3>
          
          {/* Title */}
          <h4 className="text-white text-sm font-medium mb-3">
            {teacher.title}
          </h4>
          
          {/* Description */}
          <p className="text-white text-xs leading-relaxed line-clamp-4">
            {teacher.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TeacherGrid;