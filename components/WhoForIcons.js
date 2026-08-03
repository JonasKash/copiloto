const common = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function ScaleIcon() {
  return (
    <svg {...common}>
      <path d="M12 3v18M8 21h8" />
      <path d="M5 7h14M5 7l-3 6a3 3 0 0 0 6 0L5 7ZM19 7l-3 6a3 3 0 0 0 6 0l-3-6Z" />
    </svg>
  );
}

export function BuildingIcon() {
  return (
    <svg {...common}>
      <path d="M4 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16M12 21v-8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8" />
      <path d="M4 21h16M7.5 7h.01M7.5 11h.01M7.5 15h.01" />
    </svg>
  );
}

export function ChatIcon() {
  return (
    <svg {...common}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </svg>
  );
}

export function SearchDocIcon() {
  return (
    <svg {...common}>
      <path d="M9 3h6l4 4v6" />
      <path d="M15 3v4h4" />
      <circle cx="9" cy="15" r="4" />
      <path d="m6 18-2.5 2.5" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function TrendUpIcon() {
  return (
    <svg {...common}>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

export const WHO_FOR_ICONS = {
  scale: ScaleIcon,
  building: BuildingIcon,
  chat: ChatIcon,
  searchDoc: SearchDocIcon,
  clock: ClockIcon,
  trendUp: TrendUpIcon,
};
