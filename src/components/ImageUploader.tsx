'use client';

import { useState, useRef } from 'react';
import { Upload, X, ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface ImageUploaderProps {
  label: string;
  onImagesChange: (images: string[]) => void;
  maxImages?: number;
  currentImages?: string[];
}

export default function ImageUploader({ 
  label, 
  onImagesChange, 
  maxImages = 5, 
  currentImages = [] 
}: ImageUploaderProps) {
  const [images, setImages] = useState<string[]>(currentImages);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;

    const newImages: string[] = [];
    const remainingSlots = maxImages - images.length;
    const filesToProcess = Math.min(files.length, remainingSlots);

    for (let i = 0; i < filesToProcess; i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          newImages.push(result);
          
          if (newImages.length === filesToProcess) {
            const updatedImages = [...images, ...newImages];
            setImages(updatedImages);
            onImagesChange(updatedImages);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onImagesChange(updatedImages);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <label className="block text-green-300 font-semibold mb-2" style={{textShadow: '0 0 8px rgba(74, 222, 128, 0.5)'}}>
        {label} ({images.length}/{maxImages})
      </label>
      
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 cursor-pointer relative overflow-hidden ${
          isDragging
            ? 'border-green-400 bg-green-400/20'
            : 'border-green-600 hover:border-green-400 hover:bg-green-400/10'
        }`}
        style={{boxShadow: isDragging ? '0 0 20px rgba(74, 222, 128, 0.4)' : '0 0 10px rgba(74, 222, 128, 0.2)'}}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        <div className="absolute inset-0 bg-green-400/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFileSelect(e.target.files)}
        />
        
        <Upload className="w-12 h-12 text-green-400 mx-auto mb-4 relative z-10 animate-pulse" />
        <p className="text-green-200 mb-2 relative z-10">
          คลิกเพื่อเลือกรูปภาพหรือลากรูปมาวางที่นี่
        </p>
        <p className="text-sm text-green-300 relative z-10">
          รองรับไฟล์ JPG, PNG, GIF (สูงสุด {maxImages - images.length} รูป)
        </p>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square bg-black rounded-lg overflow-hidden border-2 border-green-600 relative" style={{boxShadow: '0 0 10px rgba(74, 222, 128, 0.2)'}}>
                <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={image}
                  alt={`${label} ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeImage(index);
                }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-black"
                style={{boxShadow: '0 0 8px rgba(239, 68, 68, 0.5)'}}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
      
      {images.length === 0 && (
        <div className="flex items-center justify-center py-8 text-gray-400 relative">
          <div className="absolute inset-0 bg-green-400/5 rounded-lg"></div>
          <ImageIcon className="w-16 h-16 mr-4 text-green-600 relative z-10" />
          <span className="relative z-10 text-green-600">ยังไม่มีรูปภาพ</span>
        </div>
      )}
    </div>
  );
}