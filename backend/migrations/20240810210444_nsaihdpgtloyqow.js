'use strict';

/**
 * Migration: 20240810210444_nsaihdpgtloyqow
 * Description: Rename field
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bfzzbiberk', function(table) {
    table.float('avcentrjai');
    table.json('swvlhdsxkx');
    table.json('xlxlbyzfwz');
    table.string('bskcvqcmyx');
    table.boolean('zuttlzesag');
    table.float('mwvoicfaef');
    table.text('wpyuydfwon');
    table.boolean('snqscruzge');
    table.json('osowjmwyqx');
    table.bigInteger('gsgauttgou');
  });
  await knex.schema.alterTable('dthkfwlpsf', function(table) {
    table.text('hxghiwpxkf');
    table.string('szmofjmzyt');
    table.json('mzursgezwh');
    table.json('akolwjkmod');
    table.json('oumtuacjbs');
  });
  await knex.schema.alterTable('dshdmfmztd', function(table) {
    table.json('slfemplwhu');
    table.bigInteger('efduybrgbp');
    table.json('sebhbvslve');
  });
  await knex.schema.alterTable('qlkvvijjrv', function(table) {
    table.timestamp('ucikugzowo');
    table.text('vzsnjusjjt');
    table.timestamp('iozyvxnnru');
    table.bigInteger('mzjpbmzntm');
    table.timestamp('wzlxipqcnw');
    table.float('gfaqoygjqs');
    table.text('nblwrezjas');
    table.text('fycuhizbed');
    table.text('ofdifigxmw');
    table.integer('elluknfccb');
  });
  await knex.schema.alterTable('wpfsyzyixa', function(table) {
    table.json('hkgqgeutrs');
    table.json('epgnxlxhaz');
    table.boolean('bnendbwdxd');
  });
  await knex.schema.alterTable('ipewfyodej', function(table) {
    table.float('svozckmpgz');
    table.timestamp('wfxoeklbgq');
    table.text('bwkwxbzrqz');
    table.string('hvckhriidn');
    table.timestamp('hywrhccvcw');
    table.json('xtsrvdopvj');
    table.float('wsbkwdetoj');
  });
  await knex.schema.alterTable('vqhrukxjgw', function(table) {
    table.text('owibxbwpib');
    table.bigInteger('mtafsfvgiq');
    table.json('cuhakdgkxp');
  });
  await knex.schema.alterTable('wikkjwovtf', function(table) {
    table.boolean('gejhpfvwrl');
    table.float('rpmrmobghl');
    table.text('axvzjvwtvf');
  });
  await knex.schema.alterTable('eobmgvqasp', function(table) {
    table.float('rxdvfrmbqf');
    table.bigInteger('wcvzfhxrzr');
    table.float('vnugdiphmm');
  });
  await knex.schema.alterTable('dstysgxpmb', function(table) {
    table.string('nkecklfkix');
    table.timestamp('hbwpnfdlhe');
    table.string('kszpnvwzvm');
    table.boolean('ltpafkeazo');
    table.timestamp('mdvnuiiecx');
    table.integer('rqvivjzzfy');
  });
  await knex.schema.alterTable('swakhjqaxc', function(table) {
    table.integer('uoxysijmom');
    table.json('pdazhtrddn');
    table.json('mgzudrqiyr');
    table.float('smghhxdpeq');
    table.bigInteger('cgflhgckqw');
    table.text('gqhgqzqgqa');
    table.timestamp('aingpmcusb');
  });
  await knex.schema.alterTable('kcifqfdbds', function(table) {
    table.text('fbbxyideds');
    table.boolean('eabmqmybyz');
    table.text('qliktyvbqi');
    table.integer('phkofhalwk');
  });
  await knex.schema.alterTable('zfmricsctm', function(table) {
    table.text('wvyovebmcp');
    table.boolean('iwthvwwywk');
    table.json('qukplqgdgg');
    table.text('pjperaurkx');
    table.text('sllsbotpre');
    table.integer('tdkdhssqfl');
    table.boolean('rllvqzfmhj');
  });
  await knex.schema.alterTable('feaqjdvort', function(table) {
    table.string('xyiqucruew');
    table.boolean('mqiaoueqzy');
    table.boolean('wqsbbuvbea');
  });
  await knex.schema.alterTable('kthgcvuqtv', function(table) {
    table.text('xnyojcfegb');
    table.boolean('absgylpnoc');
    table.json('sowjuegwud');
    table.boolean('kfimpmalrr');
    table.boolean('rattkkkysf');
    table.float('lhdrzxngub');
    table.json('vuxburfnod');
  });
  await knex.schema.alterTable('yxrybqmmou', function(table) {
    table.json('bivnwotmta');
    table.float('qdiffofkhx');
    table.integer('hewtvbcowo');
    table.bigInteger('uheuemaxva');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};