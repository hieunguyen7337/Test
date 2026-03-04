'use strict';

/**
 * Migration: 20240121162314_zsbntuenajhtumu
 * Description: Redo the undo
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('igxnzvynni', function(table) {
    table.integer('oxikvllcuz');
    table.boolean('vgxefwehtb');
    table.bigInteger('pbnvhuugad');
    table.json('jitnjzuvot');
    table.integer('ebvqppagpr');
    table.boolean('yvaalampnm');
    table.float('sibrilpfef');
    table.string('liqvfuyriq');
    table.json('stflmyzezz');
    table.timestamp('bcgybiclos');
  });
  await knex.schema.alterTable('ahxxapqbzr', function(table) {
    table.text('rzggzlxvic');
    table.float('ajvrvvxyom');
    table.timestamp('txzqbacrul');
    table.boolean('xjgkxsejpk');
    table.text('tcnmxetitt');
    table.float('lnksygcich');
  });
  await knex.schema.alterTable('yhsorekukj', function(table) {
    table.timestamp('fthlhlswdj');
    table.text('pcbpfbdeyx');
    table.json('ukeleflyda');
    table.timestamp('nglhftqtjj');
    table.bigInteger('onlkxcozkm');
    table.timestamp('amfcbgxfxw');
    table.json('yvnbkvvduu');
  });
  await knex.schema.alterTable('keqrpzqfza', function(table) {
    table.boolean('afhuyambao');
    table.float('drtjlywybb');
    table.bigInteger('zjejfbzmhp');
    table.string('fhtwahhpsz');
    table.integer('vcvcrleczr');
    table.float('zgslvjyfgs');
    table.float('fjuhrzzrjj');
  });
  await knex.schema.alterTable('tixxfwieoy', function(table) {
    table.text('xbqrgqksxf');
    table.integer('wnpaahwmsq');
    table.integer('pgyazbffhw');
    table.timestamp('smkzairbtj');
    table.text('fayoxxttut');
    table.bigInteger('veodbmxepj');
    table.integer('pewsmwlgeu');
    table.bigInteger('fhicbjlynw');
    table.bigInteger('byyahetbwq');
  });
  await knex.schema.alterTable('vqaeohouoj', function(table) {
    table.boolean('gnwemglwgv');
    table.json('hlialuyebi');
    table.boolean('thwbuxjdmg');
    table.integer('vcfcuuamwv');
    table.string('cffwqzikrw');
    table.boolean('oygkceuqfm');
    table.timestamp('pnjxhawvfy');
    table.text('lzutrhjnwg');
    table.integer('wbeyrqnaic');
    table.text('uymsgtyaag');
  });
  await knex.schema.alterTable('tcverhebtb', function(table) {
    table.bigInteger('kpiqwwxrzj');
    table.bigInteger('lhyefeguor');
    table.timestamp('phzurhqdbm');
  });
  await knex.schema.alterTable('utthyvekwa', function(table) {
    table.integer('bdieebkpdw');
    table.json('jkbnmvicqa');
    table.integer('spcojtthcn');
    table.text('cbwwosypcz');
    table.timestamp('rdgjbavfui');
    table.json('uscsnmwjbj');
    table.boolean('qcoprrrdvu');
    table.string('qapawncsvm');
  });
  await knex.schema.alterTable('mklgvjqvmf', function(table) {
    table.boolean('ezzbvhsakn');
    table.text('gxxvcxteuv');
    table.float('hahbhmjzsa');
  });
  await knex.schema.alterTable('ktmxqixoyl', function(table) {
    table.bigInteger('bqrsansutw');
    table.boolean('pcmypkwmrw');
    table.float('apxheqsuip');
    table.bigInteger('jcaguxejpt');
    table.float('miuyphkhhh');
    table.boolean('nxfakybbxv');
    table.text('udcixldgzf');
    table.string('enterkhqdv');
    table.integer('vuabjelpmk');
    table.bigInteger('ylqphczkki');
  });
  await knex.schema.alterTable('ooruqexlfq', function(table) {
    table.float('zpnvfdsvts');
    table.boolean('ochhoammng');
    table.text('qlrpdrvefu');
    table.json('rrawlvoetm');
    table.json('wmkagwoeny');
    table.boolean('yfnxgvdxbq');
    table.boolean('lqmgzitazk');
    table.string('kfvwzbkznj');
    table.float('tboputorlx');
    table.text('yzbovwdidy');
  });
  await knex.schema.alterTable('opykzbybvx', function(table) {
    table.text('vswffbsmfr');
    table.timestamp('ntfuiwgrvm');
    table.boolean('xiqxhdnejv');
    table.integer('uscltsqjlr');
    table.json('krwijkmpil');
    table.float('thmxltmlaz');
    table.string('omytotglse');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};