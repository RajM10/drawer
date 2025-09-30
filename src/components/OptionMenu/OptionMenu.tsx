import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  CodeXml,
  CopyIcon,
  Pen,
  Trash2,
  Type,
} from 'lucide-react';
import Container from './Container';
import Label from './Label';
import OptionsContainer from './Options';
import Row from './Row';
import Slider from './Slider';
import { useSelection } from '@/context/selectionContext';
import { updateShape } from '@/helper/storage';
import { Shape } from '@/types/shape';

export default function OptionMenu() {
  const {
    selectedShape,
    showOptionMenu,
    updateSelectedShape,
    setSelectedShape,
    setShowOptionMenu,
  } = useSelection();

  if (!showOptionMenu || !selectedShape) return null;

  const handleColorChange = (color: string) => {
    updateSelectedShape({ color });
    // Update the shape in storage
    updateShape(selectedShape.id, { color });
  };

  const handleOpacityChange = (opacity: number) => {
    updateSelectedShape({ opacity });
    updateShape(selectedShape.id, { opacity });
  };

  const handleDelete = () => {
    // Remove shape from storage
    const shapes = JSON.parse(localStorage.getItem('shapes') || '[]');
    const updatedShapes = shapes.filter(
      (shape: Shape) => shape.id !== selectedShape.id
    );
    localStorage.setItem('shapes', JSON.stringify(updatedShapes));

    setSelectedShape(null);
    setShowOptionMenu(false);
  };

  const handleCopy = () => {
    // Copy shape logic would go here
    console.log('Copy shape:', selectedShape);
  };
  return (
    <div className='fixed top-1/6 left-4 z-20 grid max-w-[13rem] grid-cols-1 gap-y-4 rounded-lg bg-slate-900 p-3 select-none'>
      <Container>
        <Label name='Stroke' />
        <Row>
          <OptionsContainer
            style='secondary'
            className={`bg-white ${selectedShape.color === '#ffffff' ? 'ring-2 ring-blue-400' : ''}`}
            onClick={() => handleColorChange('#ffffff')}
          />
          <OptionsContainer
            style='secondary'
            className={`bg-slate-950 ${selectedShape.color === '#0f172a' ? 'ring-2 ring-blue-400' : ''}`}
            onClick={() => handleColorChange('#0f172a')}
          />
          <OptionsContainer
            style='secondary'
            className={`bg-amber-400 ${selectedShape.color === '#fbbf24' ? 'ring-2 ring-blue-400' : ''}`}
            onClick={() => handleColorChange('#fbbf24')}
          />
          <OptionsContainer
            style='secondary'
            className={`bg-blue-400 ${selectedShape.color === '#60a5fa' ? 'ring-2 ring-blue-400' : ''}`}
            onClick={() => handleColorChange('#60a5fa')}
          />
          <OptionsContainer
            style='secondary'
            className={`bg-red-400 ${selectedShape.color === '#f87171' ? 'ring-2 ring-blue-400' : ''}`}
            onClick={() => handleColorChange('#f87171')}
          />
          <OptionsContainer
            style='secondary'
            className={`bg-green-400 ${selectedShape.color === '#4ade80' ? 'ring-2 ring-blue-400' : ''}`}
            onClick={() => handleColorChange('#4ade80')}
          />
          <OptionsContainer
            style='secondary'
            className={`bg-purple-400 ${selectedShape.color === '#a78bfa' ? 'ring-2 ring-blue-400' : ''}`}
            onClick={() => handleColorChange('#a78bfa')}
          />
        </Row>
      </Container>
      <Container>
        <Label name='Font family' />
        <Row>
          <OptionsContainer>
            <Pen size={16} strokeWidth={1.4} />
          </OptionsContainer>
          <OptionsContainer>
            <Type size={16} strokeWidth={1.4} />
          </OptionsContainer>
          <OptionsContainer>
            <CodeXml size={16} strokeWidth={1.4} />
          </OptionsContainer>
        </Row>
      </Container>
      <Container>
        <Label name='font size' />
        <Row>
          <OptionsContainer>S</OptionsContainer>
          <OptionsContainer>M</OptionsContainer>
          <OptionsContainer>L</OptionsContainer>
          <OptionsContainer>XL</OptionsContainer>
        </Row>
      </Container>
      <Container>
        <Label name='text align' />
        <Row>
          <OptionsContainer>
            <AlignLeft size={16} strokeWidth={1.4} />
          </OptionsContainer>
          <OptionsContainer>
            <AlignCenter size={16} strokeWidth={1.4} />
          </OptionsContainer>
          <OptionsContainer>
            <AlignRight size={16} strokeWidth={1.4} />
          </OptionsContainer>
        </Row>
      </Container>
      <Container>
        <Label name='opacity' />
        <Row>
          <Slider
            value={selectedShape.opacity || 100}
            onChange={handleOpacityChange}
          />
        </Row>
      </Container>
      <Container>
        <Label name='actions' />
        <Row>
          <OptionsContainer onClick={handleDelete}>
            <Trash2 size={16} strokeWidth={1.4} />
          </OptionsContainer>
          <OptionsContainer onClick={handleCopy}>
            <CopyIcon size={16} strokeWidth={1.4} />
          </OptionsContainer>
        </Row>
      </Container>
    </div>
  );
}
