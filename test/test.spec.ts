import 'jasmine';
import should from 'should';

import Foo from '../src/foo';

describe('foo', () => {
    it('bar', () => {
        const b = 1;
        should.equal(new Foo('bar').name, 'bar');
    });
});