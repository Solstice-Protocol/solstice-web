import {
  ReactFlow,
  type Node,
  type Edge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'User Device' },
    position: { x: 50, y: 100 },
    style: {
      background: 'rgba(147, 132, 174, 0.2)',
      border: '1px solid rgba(147, 132, 174, 0.5)',
      borderRadius: '12px',
      color: '#f4f3f1',
      padding: '16px',
      fontSize: '14px',
      fontFamily: 'Playfair Display, serif',
    },
  },
  {
    id: '2',
    data: { label: 'Aadhaar QR Scan' },
    position: { x: 50, y: 200 },
    style: {
      background: 'rgba(20, 20, 31, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      color: '#bab4ab',
      padding: '16px',
      fontSize: '13px',
    },
  },
  {
    id: '3',
    data: { label: 'ZK Proof Generation' },
    position: { x: 250, y: 150 },
    style: {
      background: 'rgba(147, 132, 174, 0.3)',
      border: '2px solid rgba(147, 132, 174, 0.6)',
      borderRadius: '12px',
      color: '#f4f3f1',
      padding: '20px',
      fontSize: '14px',
      fontWeight: '600',
    },
  },
  {
    id: '4',
    data: { label: 'Groth16 Circuit' },
    position: { x: 250, y: 250 },
    style: {
      background: 'rgba(20, 20, 31, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      color: '#bab4ab',
      padding: '16px',
      fontSize: '13px',
    },
  },
  {
    id: '5',
    data: { label: 'Solana Program' },
    position: { x: 500, y: 100 },
    style: {
      background: 'rgba(147, 132, 174, 0.2)',
      border: '1px solid rgba(147, 132, 174, 0.5)',
      borderRadius: '12px',
      color: '#f4f3f1',
      padding: '16px',
      fontSize: '14px',
      fontFamily: 'Playfair Display, serif',
    },
  },
  {
    id: '6',
    data: { label: 'On-Chain Verification' },
    position: { x: 500, y: 200 },
    style: {
      background: 'rgba(20, 20, 31, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      color: '#bab4ab',
      padding: '16px',
      fontSize: '13px',
    },
  },
  {
    id: '7',
    type: 'output',
    data: { label: 'Identity Verified ✓' },
    position: { x: 700, y: 150 },
    style: {
      background: 'rgba(147, 132, 174, 0.3)',
      border: '2px solid rgba(147, 132, 174, 0.6)',
      borderRadius: '12px',
      color: '#f4f3f1',
      padding: '20px',
      fontSize: '14px',
      fontWeight: '600',
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    style: { stroke: 'rgba(147, 132, 174, 0.5)', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'rgba(147, 132, 174, 0.5)' },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
    style: { stroke: 'rgba(147, 132, 174, 0.5)', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'rgba(147, 132, 174, 0.5)' },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    style: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1, strokeDasharray: '5,5' },
  },
  {
    id: 'e3-5',
    source: '3',
    target: '5',
    animated: true,
    style: { stroke: 'rgba(147, 132, 174, 0.5)', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'rgba(147, 132, 174, 0.5)' },
    label: 'Submit Proof',
    labelStyle: { fill: '#bab4ab', fontSize: 11 },
    labelBgStyle: { fill: 'rgba(20, 20, 31, 0.9)' },
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    style: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1, strokeDasharray: '5,5' },
  },
  {
    id: 'e6-7',
    source: '6',
    target: '7',
    animated: true,
    style: { stroke: 'rgba(147, 132, 174, 0.5)', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'rgba(147, 132, 174, 0.5)' },
  },
];

export default function ArchitectureFlow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-secondary/20 backdrop-blur-sm">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        attributionPosition="bottom-left"
        proOptions={{ hideAttribution: true }}
      >
        <Background 
          color="rgba(147, 132, 174, 0.1)" 
          gap={16} 
          size={1}
          style={{ backgroundColor: 'rgba(14, 14, 21, 0.5)' }}
        />
        <Controls className="bg-secondary/80 border border-white/10 rounded-lg" />
        <MiniMap 
          nodeColor={(node) => {
            if (node.type === 'input') return 'rgba(147, 132, 174, 0.5)';
            if (node.type === 'output') return 'rgba(147, 132, 174, 0.7)';
            return 'rgba(147, 132, 174, 0.3)';
          }}
          maskColor="rgba(14, 14, 21, 0.8)"
          style={{ 
            backgroundColor: 'rgba(20, 20, 31, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />
      </ReactFlow>
    </div>
  );
}
