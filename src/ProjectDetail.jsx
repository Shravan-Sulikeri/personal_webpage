import React, { useState } from 'react';
import { X, Image as ImageIcon, Sparkles, Maximize2 } from 'lucide-react';

const themeGradients = {
  orange: 'from-orange-500 via-orange-600 to-orange-800',
  blue: 'from-blue-500 via-blue-600 to-blue-800',
  green: 'from-emerald-500 via-emerald-600 to-emerald-800',
  purple: 'from-purple-500 via-purple-600 to-purple-800',
  default: 'from-slate-600 via-slate-700 to-slate-900',
};

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;
  const [showArchitecture, setShowArchitecture] = useState(false);
  const gradient = themeGradients[project.theme] || themeGradients.default;
  const tags = project.tags || [];
  const stackText = project.stackSummary || (tags.length ? tags.join(' • ') : 'Not provided');
  const metrics = project.impactStats || [];

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 backdrop-blur-md px-4 py-6 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#0b0f19]/95 text-white border border-white/10 shadow-2xl">
        <div className={`p-6 bg-gradient-to-r ${gradient} text-white flex items-start justify-between gap-4`}>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] opacity-80">{project.category}</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-[0.2em] bg-white/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project detail"
            className="p-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 transition"
          >
            <X size={18} />
          </button>
        </div>

        {metrics.length > 0 && (
          <div className="flex flex-wrap gap-3 px-6 py-4 bg-white/5 border-b border-white/10">
            {metrics.map((metric) => (
              <div
                key={metric}
                className="flex items-center gap-2 bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.16em]"
              >
                <Sparkles size={14} className="text-amber-300" />
                <span>{metric}</span>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 py-6">
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-gray-300 mb-2">Overview</p>
              <p className="text-sm leading-relaxed text-gray-100">{project.description}</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-4">
              <div className="flex items-center gap-2 mb-3 text-gray-200">
                <Sparkles size={16} className="text-amber-300" />
                <p className="text-[11px] uppercase tracking-[0.18em]">Implementation Highlights</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-100">
                <li>
                  <span className="font-semibold text-gray-200">Focus:</span>{' '}
                  <span className="text-gray-300">{project.category}</span>
                </li>
                <li>
                  <span className="font-semibold text-gray-200">Stack:</span>{' '}
                  <span className="text-gray-300">{stackText}</span>
                </li>
                {metrics.length > 0 && (
                  <li>
                    <span className="font-semibold text-gray-200">Impact:</span>{' '}
                    <span className="text-gray-300">{metrics.join(' • ')}</span>
                  </li>
                )}
                {project.link && (
                  <li>
                    <span className="font-semibold text-gray-200">Repository:</span>{' '}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4"
                    >
                      View on GitHub
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 h-full">
            <div className="flex items-center gap-2 mb-3 text-gray-200">
              <ImageIcon size={16} />
              <p className="text-[11px] uppercase tracking-[0.18em]">System Architecture</p>
            </div>
            {project.architectureImage ? (
              <div
                className="relative w-full aspect-[4/3] overflow-hidden border border-white/10 bg-black/20 cursor-zoom-in"
                onClick={() => setShowArchitecture(true)}
              >
                <div className="absolute top-2 right-2 z-10 flex items-center gap-1 text-xs bg-black/50 px-2 py-1 rounded text-white/80">
                  <Maximize2 size={12} /> <span>Open full</span>
                </div>
                <img
                  src={project.architectureImage}
                  alt={`${project.title} architecture diagram`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="w-full aspect-[4/3] flex items-center justify-center bg-white/5 text-gray-400 border border-dashed border-white/10">
                Architecture diagram not provided
              </div>
            )}
          </div>
        </div>
      </div>

      {showArchitecture && (
        <div
          className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setShowArchitecture(false)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full flex items-center justify-center">
            <button
              type="button"
              aria-label="Close full-size architecture"
              className="absolute -top-10 right-0 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full border border-white/30"
              onClick={(e) => {
                e.stopPropagation();
                setShowArchitecture(false);
              }}
            >
              <X size={18} />
            </button>
            <img
              src={project.architectureImage}
              alt={`${project.title} architecture full view`}
              className="w-full h-full object-contain rounded border border-white/20 bg-black/30"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
