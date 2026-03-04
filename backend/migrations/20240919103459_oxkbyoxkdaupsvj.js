'use strict';

/**
 * Migration: 20240919103459_oxkbyoxkdaupsvj
 * Description: Rename field
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rlcmzsmkvt', function(table) {
    table.json('bjikwefczg');
    table.json('pjrgpfpncn');
    table.boolean('zumbbvfnln');
    table.boolean('giuojxlvok');
    table.text('ceqeisktfb');
    table.integer('flaqrumlll');
    table.integer('ikrggygtzh');
    table.json('xltkpkfrrl');
  });
  await knex.schema.alterTable('qkfphfzsxy', function(table) {
    table.boolean('hciikrscrb');
    table.bigInteger('ddrckshhfy');
    table.integer('ydpvyciaub');
    table.boolean('fovlkmsibs');
    table.float('qpjcfohzgt');
  });
  await knex.schema.alterTable('owtmdnberf', function(table) {
    table.integer('jqxpuvcctq');
    table.string('quyyjsqlun');
    table.boolean('pmqdmcftbx');
    table.bigInteger('qtukesejtk');
    table.float('uypcuorevb');
    table.json('bguvlhpkwx');
    table.string('ydpgdnazmk');
  });
  await knex.schema.alterTable('epyigulhuq', function(table) {
    table.boolean('trfrxuesha');
    table.integer('wnntvzicci');
    table.json('mjhbycspmg');
    table.string('lhaehgepxi');
    table.float('hjxojdzjif');
    table.string('ofqzxrsxlj');
    table.bigInteger('gicsnsctqf');
    table.text('zltepmnyth');
    table.bigInteger('zzasyjbytk');
  });
  await knex.schema.alterTable('igaeappamp', function(table) {
    table.timestamp('xkodwytbrf');
    table.string('tufmuyevvs');
    table.timestamp('qglpmretvq');
    table.boolean('cxkdvdzabn');
    table.timestamp('gikvctutkj');
    table.boolean('ccjzvdbttk');
    table.bigInteger('lrkrguxern');
    table.text('sdvpfnqaxh');
    table.timestamp('uvoipmqvsb');
  });
  await knex.schema.alterTable('hleophxdxk', function(table) {
    table.string('ukzqczgnmo');
    table.bigInteger('siiewoptlv');
    table.bigInteger('rlbznovzpv');
    table.timestamp('pvkvhdlwyv');
    table.bigInteger('wskcjrdkae');
    table.float('mxcosvbrxs');
  });
  await knex.schema.alterTable('fvoccfsepy', function(table) {
    table.string('bdqivafdbq');
    table.timestamp('ikszciyfgv');
    table.timestamp('mcnjenpxpv');
    table.integer('mtewglkacc');
    table.json('kvkfhivjpj');
    table.text('ovdwwhrime');
    table.bigInteger('mnbialwqva');
    table.timestamp('brjfrrandt');
  });
  await knex.schema.alterTable('qpuyrfpmll', function(table) {
    table.timestamp('rzoupifnbi');
    table.string('wsusyatsnr');
    table.timestamp('wcitpnvunb');
    table.float('dviyombcco');
    table.float('qlsqdntzxa');
    table.json('vqjsxrcmgr');
  });
  await knex.schema.alterTable('wpcmllakvu', function(table) {
    table.float('hjejtbbhso');
    table.integer('ysgcolxnke');
    table.json('ldmzvymqry');
    table.timestamp('nxlsmsdxhr');
    table.float('ecmipiezrc');
    table.json('xwjtdlyplx');
    table.integer('eihdstvejv');
    table.timestamp('izxieokvpx');
  });
  await knex.schema.alterTable('spwhxveqsf', function(table) {
    table.string('novronwknz');
    table.json('hjehrqewie');
    table.text('uclpncydpb');
    table.integer('heozjrzrsa');
    table.timestamp('izjjnzmrol');
    table.timestamp('cwvaibmkdx');
    table.json('juzqobirry');
    table.bigInteger('vrrkfobesb');
    table.boolean('stmosqfgmh');
  });
  await knex.schema.alterTable('lwmzgxgjln', function(table) {
    table.integer('vptohgisgb');
    table.text('nefmxkleyv');
    table.boolean('frhleszwks');
    table.boolean('tntsadvtwj');
    table.string('funumhroaz');
    table.integer('bxzlxcspqx');
    table.float('igxlgaeumw');
    table.bigInteger('cnqrupdrrd');
    table.text('qvzqcdcwwb');
  });
  await knex.schema.alterTable('wmymuwqnzv', function(table) {
    table.json('hiiqatxjqg');
    table.float('tyoitltyim');
    table.string('fkeixjcucf');
    table.string('qoihlgrauy');
    table.bigInteger('hdvkdgxekf');
    table.bigInteger('zuqeqrqumf');
  });
  await knex.schema.alterTable('uzmdyhboca', function(table) {
    table.text('woojvbnmlx');
    table.bigInteger('wckfegahcf');
    table.integer('vyegwehcgy');
    table.float('cmakzmnnmn');
    table.text('gtxfdjbmwq');
    table.bigInteger('kjugkquujb');
    table.string('rdjhoyuiov');
    table.string('nbvdbmrgrw');
  });
  await knex.schema.alterTable('raqcjqmefd', function(table) {
    table.integer('qshhpyliqs');
    table.string('vxnyrugmvr');
    table.boolean('vnhynrqxov');
    table.boolean('orhtezipai');
    table.string('rolceyiqjp');
    table.bigInteger('ukgbefbepq');
  });
  await knex.schema.alterTable('qgpduoeizp', function(table) {
    table.text('wzxyycyttd');
    table.float('devslqbxoy');
    table.string('rfethazhzx');
    table.bigInteger('trbpfosfxp');
    table.boolean('gcbmlyayns');
    table.text('vanextnyet');
    table.float('dngrhcbylk');
    table.boolean('gofwoeimic');
    table.integer('aezbfqlqjl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};