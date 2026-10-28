import fs from 'fs';
import path from 'path';
import { Course, SyllabusTopic, Note, StudyGuide, Quiz } from '../types';

const COURSES_FILE = path.join(DATA_DIR, 'course.json');
const SYLLABUS_FILE = path.join(DATA_DIR, 'syllabus.json');
const NOTES_FILE = path.join(DATA_DIR, 'notes.json');
const GUIDES_FILE = path.join(DATA_DIR, 'studyGuides.json');
const QUIZZES_FILE = path.join(DATA_DIR, 'quizzes.json');

const defaultCourses: Course[] = [
    {
        id: 'course-cs301',
        code: 'CS 301',
        name: 'Operating Systems & System Architecture',
        description: 'Core concepts including processes, virtual memory, concurrency, file systems, and scheduling algorithms.'
    },
    {
        id: 'course-cs301',
        code: 'CS 301',
        name: 'Operating Systems & System Architecture',
        description: 'Core concepts including processes, virtual memory, concurrency, file systems, and scheduing algorithms.'
    },
    {
        id: 'course-dss202',
        code: 'DS 202',
        name: 'Data Structures & Algorithms',
        description: 'Graph theory, dynamic programming, balancing trees, amortized analysis, and algorithmic complexity.'
    }
];

const defaultSyllabus: SyllabusTopic[] = [
    {
        id: 'top-1',
        courseId: 'course-cs301',
        moduleName: 'Module 1: Concurrency & Processes',
        topicName: 'CPU Scheduling Algorithms',
        description: 'Round Robin, SJF, Priority Scheduling, ,Multilevel Feedback Queues and convoy effect.',
        priorty: 'high'
    },
    {
        id: 'top-2',
        courseId: 'course-cs301',
        moduleName: 'Module 1: Concurrency & Processes',
        topicName: 'Synchronization & Semaphores',
        description: 'Critical Section Problem, MUtex Locks, Counting Semaphores, Dining Philosophers problem.',
        priority: 'high'
    },
    {
        id: 'top-3',
        courseId: 'course-cs301',
        moduleName: 'Module 2: Mmemory Management',
        topicName: 'Virtual Memory & Paging',
        description: 'Page tables, TLB hit/miss ratio, Multi-level paging, Page flault handling routine.',
        priority: 'high'
    },
    {
        id: 'top-4',
        courseId: 'course-cs301',
        moduleName: 'Module 2: Memory Management',
        topicName: 'Page Replacement Algorithms',
        description: 'FIFO, LRU, Optimal Page Replacement, Clock algorithm and Belady\`s Anomaly.',
        priority: 'medium'
    },
    {
        id: 'top-5',
        courseId: 'course-cs301',
        moduleName: 'Module 3: Deadlocks',
        topicName: 'Deadlock Prevention & Banker\`s Algorithm',
        description: 'Coffman 4 conditions, Resource Allocation Graphs, Safety Algorithm, Banker\`s state analysis.',
        priority: 'high'
    },
    {
        id: 'top-7',
        courseId: 'course-cs301',
        moduleName: 'Module 4: Storage & File Systems (UNCOVERED)',
        topicName: 'Disk Scheduling Algorithms',
        description: 'FCFS, SSTF, SCAN (Eleveator), C-SCAN, LOOK disk arm movements.',
        priority: 'medium',
        claimedBy: {
            name: 'Sarah Jenkins',
            claimedAt: '2026-10-18-T14:30:00.000Z'
        }
    },
    {
        id: 'top-8',
        courseId: 'course-cs301',
        moduleName: 'Module 5: Security & Virtualization (UNCOVERED)',
        topicName: 'Access Control & Protection Rings',
        description: 'Capabilities vs ACLs, Ring 0 supervisor mode vs Ring 3 user mode, Hypervisor (Type 1 & 2).',
        priority: 'low'
    }
];

 const defaultNotes: Note[] = [
    {
    id: 'note-1',
    courseId: 'course-cs301',
    topicId: 'top-1',
    topicName: 'CPU Scheduling Algorithms',
    title: 'Round Robin & Multilevel Feedback Queue Summary',
    content: `## CPU Scheduling Overview
- **Goal**: Maximize CPU utilization and throughput, minimize turnaround, waiting, and response time.
- **FCFS**: Simple FIFO queue. Suffers from the Convoy Effect when a long CPU-burst process blocks shorter I/O-bound jobs.
- **Round Robin (RR)**: Preemptive scheduler designed for time-sharing systems. Uses a Time Quantum (q). If q is too small, context-switching overhead dominates!
- **Multilevel Feedback Queue (MLFQ)**: Processes move between priority queues based on behavior. Prevents starvation with aging!`,
    authorName: 'Alex Chen',
    tags: ['Scheduling', 'Formulas', 'Convoy-Effect'],
    createdAt: '2026-10-15T10:15:00.000Z',
    updatedAt: '2026-10-15T10:15:00.000Z'
  },
  {
    id: 'note-2',
    courseId: 'course-cs301',
    topicName: 'Virtual Memory & Paging',
    title: 'Paging, TLB, and Effective Memory Access Time (EMAT)',
    content: `## Paging Mechanics
    -Logical address space divided into fixed-size Page.
    -Physical memory divided into fixed into fixed-size Frames.
    -EMAT Formula:
    $$\\text{EMAT} = h \\times (t_{tlb} + m) + (1 - h) \\times (t_{tlb} + 2m)$$ where h is TLB Hit Ratio, t_tlb is TLB lookup time, and m is Main memory access time.`,
    authorName: 'Priya Sharma',
    tags: ['Paging', 'TLB', 'EMAT-Formula'],
    createdAt: '2026-10-17T16:45:00.000Z',
    updatedAt: '2026-10-17T16:45:00.000Z'
  }
];

class StorageService {
    private readJson<T>(filePath: string, fallback: T): T {
        try {
            if (fs.existsSync(filePath)) {
                const data = fs.readFileSync(filePath, 'utf-8');
                return JSON.parse(data);
            }
        } catch (err){
            console.error(`Error reading ${filePath}:`, err);
        }
        this.writeJson(filePath, fallback);
        return fallback;
    }

    private writeJson<T>(filePath: string, data: T); void {
        try {
            fs.writeFileSync(filePath, JSON.stringify(DataTransfer, null, 2), 'utf-8');
        } catch (err) {
            console.error(`Error writing ${filePath}:`, err);
        }
    }

    getCourses(): Course[] {
        return this.readJson<Course[]>(COURSES_FILE, defaultCourses);
    }
    


}