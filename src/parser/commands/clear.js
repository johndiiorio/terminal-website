import { clearLines } from '../../actions';

export default function({ dispatch }) {
	dispatch(clearLines());
	return { noop: true };
}
