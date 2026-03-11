import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

type GradientTone = "amber" | "violet" | "emerald";

const toneMap: Record<GradientTone, string> = {
  amber:
    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#f59e0b,transparent),radial-gradient(circle_farthest-side_at_100%_0,#fef3c7,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#f97316,transparent),radial-gradient(circle_farthest-side_at_0_0,#fbbf24,#09090b)]",
  violet:
    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#8b5cf6,transparent),radial-gradient(circle_farthest-side_at_100%_0,#ddd6fe,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#4f46e5,transparent),radial-gradient(circle_farthest-side_at_0_0,#a78bfa,#09090b)]",
  emerald:
    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#10b981,transparent),radial-gradient(circle_farthest-side_at_100%_0,#d1fae5,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#14b8a6,transparent),radial-gradient(circle_farthest-side_at_0_0,#34d399,#09090b)]",
};

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
  tone = "amber",
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  tone?: GradientTone;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className={cn("group relative p-[1px]", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "200% 200%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-[1] rounded-3xl opacity-45 blur-md transition duration-400 group-hover:opacity-60",
          toneMap[tone],
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
