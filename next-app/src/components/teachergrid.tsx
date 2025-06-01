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
    <div className="px-6 py-12 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="text-center items-center flex flex-col">
            {/* Profile Image */}
            <div className="mb-4 justify-center">
              <div className="relative w-44 h-44 bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={teacher.imageUrl}
                  alt={teacher.imageAlt}
                  width={176}
                  height={176}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Name */}
            <h3 className="text-white text-xl font-bold mb-2">
              {teacher.name}
            </h3>
            {/* Title */}
            <h4 className="text-white text-base font-medium mb-4">
              {teacher.title}
            </h4>
            {/* Description */}
            <p className="text-white text-sm leading-relaxed max-w-md break-words text-left">
              {teacher.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherGrid;