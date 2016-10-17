import test from 'ava';
import fn from './';

test(t => {
	t.is(fn(1), 604800000);
});
