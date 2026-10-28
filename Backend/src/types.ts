export interface Course {
    id: string;
    code: string;
    name: string;
    description: string;
}

export interface SyllabusTopic {
    id: string;
    courseId: string;
    moduleName: string;
    topicName: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
    claimedBy?: {
        name: string;
        claimedAt:string;
    };
}

export interface Note {
    id: string;
    courseId: string;
    topicId: string;
    topicName: string;
    title: string;
    content: string;
    authorName: string;
    authorAvatar: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
}

export interface StudyGuide {
    id: string;
    courseId: string;
    title: string;
    summary: string;
    content: string;
    keyConcepts: {concept: string; definition: string; examTip: string }[];
    formulasOrRules: string[];
    topicsCovered: string[];
    generatedAt: string;
    contributorCount: number;
}

export interface QuizQuestion {
    id: string;
    topicName: string;
    question: string;
    type: 'mcq' | 'flashcard' | 'true_false';
    options?: string[];
    correctAnswer: string;
    explanation: string;
    difficulty: 'easy' | 'medium' |'hard';
}

export interface Quiz {
    id: string;
    courseId: string;
    title: string;
    generatedAt: string;
    questions: QuizQuestion[];
}